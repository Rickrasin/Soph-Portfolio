import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'cta-button';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      [
        'solidAmberOrange',
        'solidCrimsonWine',
        'outlineCrimsonWine',
        'outlineAmberOrange',
      ]
    >;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<
      ['linkedin', 'instagram', 'behance', 'dribbble']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cta-button': SharedCtaButton;
      'shared.social-link': SharedSocialLink;
    }
  }
}
