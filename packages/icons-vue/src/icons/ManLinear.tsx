// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManLinearSvg from '@ant-design/icons-svg/lib/asn/ManLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManLinear: ManLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManLinearSvg}></AntdIcon>;
};

ManLinear.displayName = 'ManLinear';
ManLinear.inheritAttrs = false;
export default ManLinear;