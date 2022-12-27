// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightBoldSvg from '@ant-design/icons-svg/lib/asn/CopyrightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightBold: CopyrightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightBoldSvg}></AntdIcon>;
};

CopyrightBold.displayName = 'CopyrightBold';
CopyrightBold.inheritAttrs = false;
export default CopyrightBold;