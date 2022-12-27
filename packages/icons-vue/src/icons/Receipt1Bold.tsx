// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1BoldSvg from '@ant-design/icons-svg/lib/asn/Receipt1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1Bold: Receipt1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1BoldSvg}></AntdIcon>;
};

Receipt1Bold.displayName = 'Receipt1Bold';
Receipt1Bold.inheritAttrs = false;
export default Receipt1Bold;