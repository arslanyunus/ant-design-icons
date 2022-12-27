// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareBulk: ForwardSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareBulkSvg}></AntdIcon>;
};

ForwardSquareBulk.displayName = 'ForwardSquareBulk';
ForwardSquareBulk.inheritAttrs = false;
export default ForwardSquareBulk;