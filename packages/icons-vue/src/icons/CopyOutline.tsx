// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyOutlineSvg from '@ant-design/icons-svg/lib/asn/CopyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyOutline: CopyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyOutlineSvg}></AntdIcon>;
};

CopyOutline.displayName = 'CopyOutline';
CopyOutline.inheritAttrs = false;
export default CopyOutline;