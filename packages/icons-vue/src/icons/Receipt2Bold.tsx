// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2BoldSvg from '@ant-design/icons-svg/lib/asn/Receipt2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2Bold: Receipt2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2BoldSvg}></AntdIcon>;
};

Receipt2Bold.displayName = 'Receipt2Bold';
Receipt2Bold.inheritAttrs = false;
export default Receipt2Bold;