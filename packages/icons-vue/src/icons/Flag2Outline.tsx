// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flag2OutlineSvg from '@ant-design/icons-svg/lib/asn/Flag2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flag2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flag2Outline: Flag2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flag2OutlineSvg}></AntdIcon>;
};

Flag2Outline.displayName = 'Flag2Outline';
Flag2Outline.inheritAttrs = false;
export default Flag2Outline;