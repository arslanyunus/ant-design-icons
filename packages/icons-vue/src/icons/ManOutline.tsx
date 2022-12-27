// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManOutlineSvg from '@ant-design/icons-svg/lib/asn/ManOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManOutline: ManOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManOutlineSvg}></AntdIcon>;
};

ManOutline.displayName = 'ManOutline';
ManOutline.inheritAttrs = false;
export default ManOutline;