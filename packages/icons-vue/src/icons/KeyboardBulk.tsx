// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardBulkSvg from '@ant-design/icons-svg/lib/asn/KeyboardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardBulk: KeyboardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardBulkSvg}></AntdIcon>;
};

KeyboardBulk.displayName = 'KeyboardBulk';
KeyboardBulk.inheritAttrs = false;
export default KeyboardBulk;