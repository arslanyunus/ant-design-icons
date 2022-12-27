// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownBoldSvg from '@ant-design/icons-svg/lib/asn/CrownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownBold: CrownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownBoldSvg}></AntdIcon>;
};

CrownBold.displayName = 'CrownBold';
CrownBold.inheritAttrs = false;
export default CrownBold;