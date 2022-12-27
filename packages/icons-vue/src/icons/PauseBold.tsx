// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseBoldSvg from '@ant-design/icons-svg/lib/asn/PauseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseBold: PauseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseBoldSvg}></AntdIcon>;
};

PauseBold.displayName = 'PauseBold';
PauseBold.inheritAttrs = false;
export default PauseBold;