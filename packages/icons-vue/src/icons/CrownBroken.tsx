// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownBrokenSvg from '@ant-design/icons-svg/lib/asn/CrownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownBroken: CrownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownBrokenSvg}></AntdIcon>;
};

CrownBroken.displayName = 'CrownBroken';
CrownBroken.inheritAttrs = false;
export default CrownBroken;