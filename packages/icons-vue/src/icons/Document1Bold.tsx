// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1BoldSvg from '@ant-design/icons-svg/lib/asn/Document1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1Bold: Document1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1BoldSvg}></AntdIcon>;
};

Document1Bold.displayName = 'Document1Bold';
Document1Bold.inheritAttrs = false;
export default Document1Bold;