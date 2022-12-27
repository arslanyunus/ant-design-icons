// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManBoldSvg from '@ant-design/icons-svg/lib/asn/ManBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManBold: ManBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManBoldSvg}></AntdIcon>;
};

ManBold.displayName = 'ManBold';
ManBold.inheritAttrs = false;
export default ManBold;