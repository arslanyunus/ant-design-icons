// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareLinearSvg from '@ant-design/icons-svg/lib/asn/ShareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareLinear: ShareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareLinearSvg}></AntdIcon>;
};

ShareLinear.displayName = 'ShareLinear';
ShareLinear.inheritAttrs = false;
export default ShareLinear;