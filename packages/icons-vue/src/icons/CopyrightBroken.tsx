// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightBrokenSvg from '@ant-design/icons-svg/lib/asn/CopyrightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightBroken: CopyrightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightBrokenSvg}></AntdIcon>;
};

CopyrightBroken.displayName = 'CopyrightBroken';
CopyrightBroken.inheritAttrs = false;
export default CopyrightBroken;