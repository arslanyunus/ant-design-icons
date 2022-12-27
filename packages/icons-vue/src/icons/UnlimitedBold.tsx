// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedBoldSvg from '@ant-design/icons-svg/lib/asn/UnlimitedBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedBold: UnlimitedBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedBoldSvg}></AntdIcon>;
};

UnlimitedBold.displayName = 'UnlimitedBold';
UnlimitedBold.inheritAttrs = false;
export default UnlimitedBold;