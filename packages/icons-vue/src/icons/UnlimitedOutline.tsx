// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedOutlineSvg from '@ant-design/icons-svg/lib/asn/UnlimitedOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedOutline: UnlimitedOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedOutlineSvg}></AntdIcon>;
};

UnlimitedOutline.displayName = 'UnlimitedOutline';
UnlimitedOutline.inheritAttrs = false;
export default UnlimitedOutline;