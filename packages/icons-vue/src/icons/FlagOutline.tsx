// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagOutlineSvg from '@ant-design/icons-svg/lib/asn/FlagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagOutline: FlagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagOutlineSvg}></AntdIcon>;
};

FlagOutline.displayName = 'FlagOutline';
FlagOutline.inheritAttrs = false;
export default FlagOutline;