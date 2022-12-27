// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightOutlineSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightOutline: CopyrightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightOutlineSvg}></AntdIcon>;
};

CopyrightOutline.displayName = 'CopyrightOutline';
CopyrightOutline.inheritAttrs = false;
export default CopyrightOutline;