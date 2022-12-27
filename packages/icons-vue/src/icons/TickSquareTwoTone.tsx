// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/TickSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareTwoTone: TickSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareTwoToneSvg}></AntdIcon>;
};

TickSquareTwoTone.displayName = 'TickSquareTwoTone';
TickSquareTwoTone.inheritAttrs = false;
export default TickSquareTwoTone;