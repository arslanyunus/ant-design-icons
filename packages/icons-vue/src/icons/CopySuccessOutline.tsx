// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessOutlineSvg from '@ant-design/icons-svg/lib/asn/CopySuccessOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessOutline: CopySuccessOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessOutlineSvg}></AntdIcon>;
};

CopySuccessOutline.displayName = 'CopySuccessOutline';
CopySuccessOutline.inheritAttrs = false;
export default CopySuccessOutline;