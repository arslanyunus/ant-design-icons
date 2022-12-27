// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DangerBrokenSvg from '@ant-design/icons-svg/lib/asn/DangerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DangerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DangerBroken: DangerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DangerBrokenSvg}></AntdIcon>;
};

DangerBroken.displayName = 'DangerBroken';
DangerBroken.inheritAttrs = false;
export default DangerBroken;