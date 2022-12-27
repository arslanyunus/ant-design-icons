// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdBoldSvg from '@ant-design/icons-svg/lib/asn/CdBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdBold: CdBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdBoldSvg}></AntdIcon>;
};

CdBold.displayName = 'CdBold';
CdBold.inheritAttrs = false;
export default CdBold;