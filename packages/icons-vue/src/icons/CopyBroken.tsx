// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyBrokenSvg from '@ant-design/icons-svg/lib/asn/CopyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyBroken: CopyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyBrokenSvg}></AntdIcon>;
};

CopyBroken.displayName = 'CopyBroken';
CopyBroken.inheritAttrs = false;
export default CopyBroken;