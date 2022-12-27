// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyBoldSvg from '@ant-design/icons-svg/lib/asn/CopyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyBold: CopyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyBoldSvg}></AntdIcon>;
};

CopyBold.displayName = 'CopyBold';
CopyBold.inheritAttrs = false;
export default CopyBold;