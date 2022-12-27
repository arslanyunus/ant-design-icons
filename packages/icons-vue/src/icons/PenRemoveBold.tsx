// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/PenRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveBold: PenRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveBoldSvg}></AntdIcon>;
};

PenRemoveBold.displayName = 'PenRemoveBold';
PenRemoveBold.inheritAttrs = false;
export default PenRemoveBold;