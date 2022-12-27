// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Element2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2TwoTone: Element2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2TwoToneSvg}></AntdIcon>;
};

Element2TwoTone.displayName = 'Element2TwoTone';
Element2TwoTone.inheritAttrs = false;
export default Element2TwoTone;