// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseBoldSvg from '@ant-design/icons-svg/lib/asn/PenCloseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseBold: PenCloseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseBoldSvg}></AntdIcon>;
};

PenCloseBold.displayName = 'PenCloseBold';
PenCloseBold.inheritAttrs = false;
export default PenCloseBold;