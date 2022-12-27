// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2BoldSvg from '@ant-design/icons-svg/lib/asn/Wind2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2Bold: Wind2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2BoldSvg}></AntdIcon>;
};

Wind2Bold.displayName = 'Wind2Bold';
Wind2Bold.inheritAttrs = false;
export default Wind2Bold;