// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionBroken: CloudConnectionBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionBrokenSvg}></AntdIcon>;
};

CloudConnectionBroken.displayName = 'CloudConnectionBroken';
CloudConnectionBroken.inheritAttrs = false;
export default CloudConnectionBroken;