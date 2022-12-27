// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemOutlineSvg from '@ant-design/icons-svg/lib/asn/BackwardItemOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemOutline: BackwardItemOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemOutlineSvg}></AntdIcon>;
};

BackwardItemOutline.displayName = 'BackwardItemOutline';
BackwardItemOutline.inheritAttrs = false;
export default BackwardItemOutline;