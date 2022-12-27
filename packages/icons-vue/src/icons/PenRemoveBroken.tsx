// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/PenRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveBroken: PenRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveBrokenSvg}></AntdIcon>;
};

PenRemoveBroken.displayName = 'PenRemoveBroken';
PenRemoveBroken.inheritAttrs = false;
export default PenRemoveBroken;