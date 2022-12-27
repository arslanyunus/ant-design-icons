// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Element3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3TwoTone: Element3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3TwoToneSvg}></AntdIcon>;
};

Element3TwoTone.displayName = 'Element3TwoTone';
Element3TwoTone.inheritAttrs = false;
export default Element3TwoTone;