// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownOutlineSvg from '@ant-design/icons-svg/lib/asn/CrownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownOutline: CrownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownOutlineSvg}></AntdIcon>;
};

CrownOutline.displayName = 'CrownOutline';
CrownOutline.inheritAttrs = false;
export default CrownOutline;