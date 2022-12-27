// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Element4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4TwoTone: Element4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4TwoToneSvg}></AntdIcon>;
};

Element4TwoTone.displayName = 'Element4TwoTone';
Element4TwoTone.inheritAttrs = false;
export default Element4TwoTone;