# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "personal-website"
  spec.version       = "0.1.0"
  spec.authors       = ["Lucas Bulgarelli"]
  spec.email         = ["lucas.bulgarelli@hotmail.com"]

  spec.summary       = "Jekyll theme for personal websites."
  spec.homepage      = "https://github.com/lbulgarelli/personal-website"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9"

  spec.add_development_dependency "bundler", "~> 2.1.4"
  spec.add_development_dependency "rake", "~> 12.0"
end
