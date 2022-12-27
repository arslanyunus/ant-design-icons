// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21BoldSvg from '@ant-design/icons-svg/lib/asn/Receipt21Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21Bold: Receipt21BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21BoldSvg}></AntdIcon>;
};

Receipt21Bold.displayName = 'Receipt21Bold';
Receipt21Bold.inheritAttrs = false;
export default Receipt21Bold;