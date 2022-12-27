// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemTwoToneSvg from '@ant-design/icons-svg/lib/asn/ForwardItemTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemTwoTone: ForwardItemTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemTwoToneSvg}></AntdIcon>;
};

ForwardItemTwoTone.displayName = 'ForwardItemTwoTone';
ForwardItemTwoTone.inheritAttrs = false;
export default ForwardItemTwoTone;