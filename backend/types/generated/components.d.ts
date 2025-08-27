import type { Schema, Struct } from '@strapi/strapi';

export interface CtaButtonShared extends Struct.ComponentSchema {
  collectionName: 'components_cta_button_shareds';
  info: {
    displayName: 'shared';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      [
        'solidAmberOrange',
        'solidCrimsonWine',
        'outlineCrimsonWine',
        'outlineAmberOrange',
      ]
    > &
      Schema.Attribute.Required;
  };
}

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
      'cta-button.shared': CtaButtonShared;
      'shared.cta-button': SharedCtaButton;
      'shared.social-link': SharedSocialLink;
    }
  }
}
