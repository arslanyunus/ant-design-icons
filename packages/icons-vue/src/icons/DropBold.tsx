// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropBoldSvg from '@ant-design/icons-svg/lib/asn/DropBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropBold: DropBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropBoldSvg}></AntdIcon>;
};

DropBold.displayName = 'DropBold';
DropBold.inheritAttrs = false;
export default DropBold;