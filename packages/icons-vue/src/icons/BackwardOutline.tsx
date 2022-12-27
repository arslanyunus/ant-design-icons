// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardOutlineSvg from '@ant-design/icons-svg/lib/asn/BackwardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardOutline: BackwardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardOutlineSvg}></AntdIcon>;
};

BackwardOutline.displayName = 'BackwardOutline';
BackwardOutline.inheritAttrs = false;
export default BackwardOutline;