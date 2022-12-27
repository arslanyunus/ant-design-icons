// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdBrokenSvg from '@ant-design/icons-svg/lib/asn/CdBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdBroken: CdBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdBrokenSvg}></AntdIcon>;
};

CdBroken.displayName = 'CdBroken';
CdBroken.inheritAttrs = false;
export default CdBroken;