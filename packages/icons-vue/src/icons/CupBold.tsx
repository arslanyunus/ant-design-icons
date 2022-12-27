// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupBoldSvg from '@ant-design/icons-svg/lib/asn/CupBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupBold: CupBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupBoldSvg}></AntdIcon>;
};

CupBold.displayName = 'CupBold';
CupBold.inheritAttrs = false;
export default CupBold;