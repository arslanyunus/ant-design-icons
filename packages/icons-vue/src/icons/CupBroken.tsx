// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupBrokenSvg from '@ant-design/icons-svg/lib/asn/CupBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupBroken: CupBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupBrokenSvg}></AntdIcon>;
};

CupBroken.displayName = 'CupBroken';
CupBroken.inheritAttrs = false;
export default CupBroken;