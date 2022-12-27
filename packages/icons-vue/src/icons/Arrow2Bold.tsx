// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2BoldSvg from '@ant-design/icons-svg/lib/asn/Arrow2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2Bold: Arrow2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2BoldSvg}></AntdIcon>;
};

Arrow2Bold.displayName = 'Arrow2Bold';
Arrow2Bold.inheritAttrs = false;
export default Arrow2Bold;