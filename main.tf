provider "aws" {
  region = "eu-west-1"
}

resource "aws_s3_bucket" "cyntler_website" {
  bucket = "cyntler-website"
  acl = "public-read"

  policy = <<EOF
    {
      "Version":"2008-10-17",
      "Statement":[{
        "Sid":"AllowPublicRead",
        "Effect":"Allow",
        "Principal": {"AWS": "*"},
        "Action":["s3:GetObject"],
        "Resource":["arn:aws:s3:::cyntler-website/*"]
      }]
    }
  EOF

  website {
    index_document = "index.html"
  }
}

resource "aws_route53_zone" "main" {
  name = "cyntler.com"
}

resource "aws_route53_record" "root_domain_a" {
  zone_id = "${aws_route53_zone.main.zone_id}"
  name = "new.cyntler.com"
  type = "A"

  alias {
    name = "${aws_cloudfront_distribution.cyntler_website.domain_name}"
    zone_id = "${aws_cloudfront_distribution.cyntler_website.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root_domain_aaaa" {
  zone_id = "${aws_route53_zone.main.zone_id}"
  name = "new.cyntler.com"
  type = "AAAA"

  alias {
    name = "${aws_cloudfront_distribution.cyntler_website.domain_name}"
    zone_id = "${aws_cloudfront_distribution.cyntler_website.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_cloudfront_distribution" "cyntler_website" {
  origin {
    origin_id = "cyntler-website"
    domain_name = "new.cyntler.com"
  }

  aliases = ["new.cyntler.com"]

  enabled = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "new.cyntler.com"

    forwarded_values {
      query_string = true
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations = []
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

output "s3_website_endpoint" {
  value = "${aws_s3_bucket.cyntler_website.website_endpoint}"
}

output "route53_domain" {
  value = "${aws_route53_record.root_domain_a.fqdn}"
}

output "cdn_domain" {
  value = "${aws_cloudfront_distribution.cyntler_website.domain_name}"
}
