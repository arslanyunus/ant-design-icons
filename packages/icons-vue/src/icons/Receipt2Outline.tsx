// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2OutlineSvg from '@ant-design/icons-svg/lib/asn/Receipt2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2Outline: Receipt2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2OutlineSvg}></AntdIcon>;
};

Receipt2Outline.displayName = 'Receipt2Outline';
Receipt2Outline.inheritAttrs = false;
export default Receipt2Outline;