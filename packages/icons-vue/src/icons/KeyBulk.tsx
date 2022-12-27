// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyBulkSvg from '@ant-design/icons-svg/lib/asn/KeyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyBulk: KeyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyBulkSvg}></AntdIcon>;
};

KeyBulk.displayName = 'KeyBulk';
KeyBulk.inheritAttrs = false;
export default KeyBulk;