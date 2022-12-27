// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TickCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleTwoTone: TickCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleTwoToneSvg}></AntdIcon>;
};

TickCircleTwoTone.displayName = 'TickCircleTwoTone';
TickCircleTwoTone.inheritAttrs = false;
export default TickCircleTwoTone;