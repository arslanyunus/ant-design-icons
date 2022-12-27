// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Element1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element1TwoTone: Element1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element1TwoToneSvg}></AntdIcon>;
};

Element1TwoTone.displayName = 'Element1TwoTone';
Element1TwoTone.inheritAttrs = false;
export default Element1TwoTone;