// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManBrokenSvg from '@ant-design/icons-svg/lib/asn/ManBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManBroken: ManBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManBrokenSvg}></AntdIcon>;
};

ManBroken.displayName = 'ManBroken';
ManBroken.inheritAttrs = false;
export default ManBroken;